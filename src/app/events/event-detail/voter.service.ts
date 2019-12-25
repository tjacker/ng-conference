import { Injectable } from '@angular/core';

import { ISession } from '../shared';

@Injectable()
export class VoterService {
  constructor() {}

  addVoter(session: ISession, voterName: string): void {
    session.voters.push(voterName);
  }

  deleteVoter(session: ISession, voterName: string): void {
    session.voters = session.voters.filter((voter: string) => voter !== voterName);
  }

  userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some((voter: string) => voter === voterName);
  }
}
