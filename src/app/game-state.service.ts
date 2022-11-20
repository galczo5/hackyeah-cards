import {Injectable} from '@angular/core';
import {map, Observable, ReplaySubject} from "rxjs";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

export type PlayerHand = {
  resource: Array<ResourceCard>;
  goals: Array<GoalCard>;
};

export type Player = {
  name: string,
  hand: PlayerHand,
  points: number;
  imageUrl: string;
};

export enum ResourceCard {
  'Drewno' = 'Drewno',
  'Cegla' = 'Cegla',
  'Zaprawa' = 'Zaprawa'
}

export enum GoalCard {
  'Dom' = 'Dom',
  'Tawerna' = 'Tawerna',
  'Baszta' = 'Baszta',
  'Zamek' = 'Zamek'
}

export type State = {
  players: Array<Player>;
  activeUser: string;
  resourcesStack: Array<ResourceCard>;
  goalsStack: Array<GoalCard>;
}

export type GoalPrice = {
  [ResourceCard.Drewno]: number,
  [ResourceCard.Zaprawa]: number,
  [ResourceCard.Cegla]: number
}

export function getGoalPoints(goal: GoalCard): number {
  switch (goal) {
    case GoalCard.Dom:
      return 1;
    case GoalCard.Tawerna:
      return 3;
    case GoalCard.Baszta:
      return 5;
    case GoalCard.Zamek:
      return 8;
  }
}

export function getGoalPrice(goal: GoalCard): GoalPrice {
  switch (goal) {
    case GoalCard.Dom:
      return {[ResourceCard.Drewno]: 1, [ResourceCard.Cegla]: 1, [ResourceCard.Zaprawa]: 0};
    case GoalCard.Tawerna:
      return {[ResourceCard.Drewno]: 1, [ResourceCard.Cegla]: 1, [ResourceCard.Zaprawa]: 1};
    case GoalCard.Baszta:
      return {[ResourceCard.Drewno]: 1, [ResourceCard.Cegla]: 2, [ResourceCard.Zaprawa]: 2};
    case GoalCard.Zamek:
      return {[ResourceCard.Drewno]: 2, [ResourceCard.Cegla]: 3, [ResourceCard.Zaprawa]: 2};
  }
}

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  private static readonly LS_KEY = 'state';

  private state$: ReplaySubject<State> = new ReplaySubject<State>(1);
  private state: State | null = null;

  // No backend today :)
  constructor(private readonly domSanitizer: DomSanitizer) {
    const item = localStorage.getItem(GameStateService.LS_KEY);

    if (item) {
      try {
        this.state = JSON.parse(item) as State;
        this.state$.next(this.state);
      } catch (e) {
        console.error(e);
      }
    }

    this.state$.subscribe(state => {
      console.log('-- State Updated');
      localStorage.setItem(GameStateService.LS_KEY, JSON.stringify(state));
      console.log(JSON.stringify(state, null, 2));
    });
  }

  get(): Observable<State> {
    return this.state$.asObservable();
  }

  getPlayers(): Observable<Array<Player>> {
    return this.state$
      .pipe(
        map(s => s.players)
      );
  }

  getActivePlayerName(): Observable<string> {
    return this.state$.pipe(map(p => p.activeUser));
  }

  getActivePlayerPoints(): Observable<number> {
    return this.state$.pipe(
      map(p => {
        const index = p.players.findIndex(x => x.name === p.activeUser);
        return p.players[index].points;
      })
    );
  }

  getActivePlayerDuplicatedCards(): Observable<Array<ResourceCard>> {
    return this.state$.pipe(
      map(p => {
        const index = p.players.findIndex(x => x.name === p.activeUser);
        const resourceCards = p.players[index].hand.resource;

        const resource1 = resourceCards.filter(r => r === ResourceCard.Drewno).length > 1;
        const resource2 = resourceCards.filter(r => r === ResourceCard.Cegla).length > 1;
        const resource3 = resourceCards.filter(r => r === ResourceCard.Zaprawa).length > 1;

        return [
          ...(resource1 ? [ResourceCard.Drewno] : []),
          ...(resource2 ? [ResourceCard.Cegla] : []),
          ...(resource3 ? [ResourceCard.Zaprawa] : [])
        ];
      })
    );
  }

  getActivePlayerResources(): Observable<Array<ResourceCard>> {
    return this.state$.pipe(
      map(p => {
        const index = p.players.findIndex(x => x.name === p.activeUser);
        return p.players[index].hand.resource.sort((a, b) => a < b ? -1 : 1);
      })
    );
  }

  canAchieveGoal(goal: GoalCard): Observable<boolean> {
    return this.state$.pipe(
      map(p => {
        const index = p.players.findIndex(x => x.name === p.activeUser);
        const resources = p.players[index].hand.resource;
        const goalPrice = getGoalPrice(goal);

        return goalPrice[ResourceCard.Drewno] <= resources.filter(r => r === ResourceCard.Drewno).length &&
          goalPrice[ResourceCard.Zaprawa] <= resources.filter(r => r === ResourceCard.Zaprawa).length &&
          goalPrice[ResourceCard.Cegla] <= resources.filter(r => r === ResourceCard.Cegla).length;
      })
    );
  }

  getActivePlayerGoals(): Observable<Array<GoalCard>> {
    return this.state$.pipe(
      map(p => {
        const index = p.players.findIndex(x => x.name === p.activeUser);
        return p.players[index].hand.goals;
      })
    );
  }

  getActivePlayerAvatar(): Observable<SafeResourceUrl> {
    return this.state$.pipe(
      map(p => {
        const index = p.players.findIndex(x => x.name === p.activeUser);
        return this.domSanitizer.bypassSecurityTrustResourceUrl(p.players[index].imageUrl);
      })
    );
  }

  drawGoalDisabled(): Observable<boolean> {
    return this.getActivePlayerGoals()
      .pipe(
        map(p => p.length >= 3)
      );
  }

  getResourceStack() {
    return this.state$.pipe(map(p => p.resourcesStack));
  }

  newGame(): void {
    console.log('-- New Game');
    const player1 = 'Maciej';
    this.state = {
      players: [
        {
          name: player1,
          hand: {goals: [], resource: []},
          points: 0,
          imageUrl: './assets/macko.png'
        },
        {
          name: 'Zbyszek',
          hand: {goals: [], resource: []},
          points: 0,
          imageUrl: './assets/zbyszko.png'
        },
        {
          name: 'Andrzej',
          hand: {goals: [], resource: []},
          points: 0,
          imageUrl: './assets/andrzej.png'
        }
      ],
      activeUser: player1,
      resourcesStack: this.randomSortResources([
        ...new Array(15).fill(ResourceCard.Drewno),
        ...new Array(15).fill(ResourceCard.Cegla),
        ...new Array(15).fill(ResourceCard.Zaprawa)
      ]),
      goalsStack: this.randomSortGoals([
        ...new Array(5).fill(GoalCard.Dom),
        ...new Array(4).fill(GoalCard.Tawerna),
        ...new Array(3).fill(GoalCard.Baszta),
        ...new Array(2).fill(GoalCard.Zamek)
      ])
    };

    this.state$.next(this.state);
  }

  drawResourceCard(): void {
    if (!this.state) {
      return;
    }

    const activeUserIndex = this.state.players.findIndex(p => p.name === this.state?.activeUser);
    const resourcesStack = [...this.state.resourcesStack];
    const userResources = [...this.state.players[activeUserIndex].hand.resource, resourcesStack.pop() as ResourceCard]
      .filter(Boolean);

    this.state = {
      ...this.state,
      resourcesStack: resourcesStack,
      players: this.state.players.map((p, i) => {
        if (i !== activeUserIndex) {
          return p;
        }

        return {
          ...p,
          hand: {
            goals: p.hand.goals,
            resource: userResources
          }
        }
      })
    };
    this.state$.next(this.state);
  }

  drawGoalCard(): void {
    if (!this.state) {
      return;
    }

    const activeUserIndex = this.state.players.findIndex(p => p.name === this.state?.activeUser);
    const goalsStack = [...this.state.goalsStack];
    const userGoals = [...this.state.players[activeUserIndex].hand.goals, goalsStack.pop() as GoalCard]
      .filter(Boolean);

    this.state = {
      ...this.state,
      goalsStack: goalsStack,
      players: this.state.players.map((p, i) => {
        if (i !== activeUserIndex) {
          return p;
        }

        return {
          ...p,
          hand: {
            goals: userGoals,
            resource: p.hand.resource
          }
        };
      })
    };
    this.state$.next(this.state);

  }

  nextUser(): void {
    if (!this.state) {
      return;
    }

    const activeUserIndex = this.state.players.findIndex(p => p.name === this.state?.activeUser);
    const newUserIndex = (activeUserIndex + 1) % this.state.players.length;

    this.state = {
      ...this.state,
      activeUser: this.state.players[newUserIndex].name
    };

    this.state$.next(this.state);
  }

  randomizeResources(): void {
    if (!this.state) {
      return;
    }

    this.state = {
      ...this.state,
      resourcesStack: this.randomSortResources(this.state.resourcesStack)
    };
    this.state$.next(this.state);
  }

  upgrade(card: GoalCard): void {
    if (!this.state) {
      return;
    }

    const activeUserIndex = this.state.players.findIndex(p => p.name === this.state?.activeUser);
    const userGoals = [...this.state.players[activeUserIndex].hand.goals];
    let userResources = [...this.state.players[activeUserIndex].hand.resource];

    const index = userGoals.findIndex(g => g === card);

    const price = getGoalPrice(card);

    // No reason to make generic when you can copy and paste :P

    const r1 = price[ResourceCard.Zaprawa];
    for (let i = 0; i < r1; i++) {
      userResources = userResources.filter(
        (value, ri, array) => ri !== array.indexOf(ResourceCard.Zaprawa)
      )
    }

    const r2 = price[ResourceCard.Drewno];
    for (let i = 0; i < r2; i++) {
      userResources = userResources.filter(
        (value, ri, array) => ri !== array.indexOf(ResourceCard.Drewno)
      )
    }

    const r3 = price[ResourceCard.Cegla];
    for (let i = 0; i < r3; i++) {
      userResources = userResources.filter(
        (value, ri, array) => ri !== array.indexOf(ResourceCard.Cegla)
      )
    }

    this.state = {
      ...this.state,
      players: this.state.players.map((p, i) => {
        if (i !== activeUserIndex) {
          return p;
        }

        return {
          ...p,
          points: p.points + getGoalPoints(card),
          hand: {
            goals: userGoals.filter((value, i) => i !== index),
            resource: userResources
          }
        };
      })
    };
    this.state$.next(this.state);
  }

  trade(selectedCard: ResourceCard, toBuy: ResourceCard) {
    if (!this.state) {
      return;
    }

    const activeUserIndex = this.state.players.findIndex(p => p.name === this.state?.activeUser);
    const userGoals = [...this.state.players[activeUserIndex].hand.goals];
    let userResources = [...this.state.players[activeUserIndex].hand.resource];

    for (let i = 0; i < 2; i++) {
      userResources = userResources.filter(
        (value, ri, array) => ri !== array.indexOf(selectedCard)
      )
    }

    this.state = {
      ...this.state,
      players: this.state.players.map((p, i) => {
        if (i !== activeUserIndex) {
          return p;
        }

        return {
          ...p,
          hand: {
            goals: p.hand.goals,
            resource: [...userResources, toBuy]
          }
        };
      })
    };
    this.state$.next(this.state);

  }

  removeGoal(card: GoalCard): void {
    if (!this.state) {
      return;
    }

    const activeUserIndex = this.state.players.findIndex(p => p.name === this.state?.activeUser);
    const userGoals = [...this.state.players[activeUserIndex].hand.goals]
      .filter((value, index, array) => index !== array.indexOf(card));

    this.state = {
      ...this.state,
      players: this.state.players.map((p, i) => {
        if (i !== activeUserIndex) {
          return p;
        }

        return {
          ...p,
          hand: {
            goals: userGoals,
            resource: p.hand.resource
          }
        };
      })
    };
    this.state$.next(this.state);
  }

  private randomSortGoals(array: Array<GoalCard>): Array<GoalCard> {
    return [...array]
      .sort((a, b) => Math.random() < Math.random() ? -1 : 1)
  }

  private randomSortResources(array: Array<ResourceCard>): Array<ResourceCard> {
    return [...array]
      .sort((a, b) => Math.random() < Math.random() ? -1 : 1)
  }
}
