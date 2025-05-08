import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
       participant_id;
       sport_type;
       duration;
       list_race_results = [];

       constructor(participant_id, sport_type, duration) {
              this.participant_id = participant_id;
              this.sport_type = sport_type;
              this.duratio = duration;
       }

       push(other) {
              if (!(other instanceof RaceResult)) {
                     throw new Error('Argument must be an instance of RaceResult.');
              }
              const newDuration = this.duration.plus(other.duration);
              return new RaceResult(this.participant_id, this.sport_type, newDuration);
       }
       minus(other) {
              if (!(other instanceof RaceResult)) {
                     throw new Error('Argument must be an instance of RaceResult.');
              }
              const newDuration = this.duration.minus(other.duration);
              return new RaceResult(this.participant_id, this.sport_type, newDuration);
       }
       toString() {
              return `${this.participant_id} ${this.sport_type} ${this.duration.toString()}`;
       }
  }
