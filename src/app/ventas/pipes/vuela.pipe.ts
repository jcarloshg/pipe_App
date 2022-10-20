import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
    transform(canFlying: boolean): string {
        return canFlying == true ? 'puede vuela' : 'no puede volar';
    }
}