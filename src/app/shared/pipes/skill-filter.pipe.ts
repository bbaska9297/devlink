import { Pipe, PipeTransform } from '@angular/core';
import { Developer } from '../developers/developers.model';
@Pipe({
  name: 'skillFilter',
})
export class SkillFilterPipe implements PipeTransform {
  transform(devs: Developer[], skill: string): Developer[] {
    if (!skill) return devs;
    return devs.filter((dev) =>
      dev.skills.some((s) => s.toLowerCase().includes(skill.toLowerCase()))
    );
  }
}
