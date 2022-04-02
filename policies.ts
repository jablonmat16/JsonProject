import { Definition } from "./definition";

export class Policies {
    vhost: string;
    name: string;
    pattern: string;
    applyTo: string;
    definition: Definition;
    priority: number;
}
