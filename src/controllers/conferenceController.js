import { Conference } from "../models/conference/conferenceModel";

export function createConference(name,cep, street, neighborhood, city, state ) {
    const conference = new Conference(name,cep, street, neighborhood, city, state);
}