* band-echart

useage
```html
    <band-echart style="flex:1;" [title]="title" [subTitle]="subTitle" [color]="color" [areaColor]="areaColor1"></band-echart>

```

```typescript

export class AppComponent {
  title = 'Sample size (AUC Radio)';
  subTitle: string = 'T/R%'
  color: string = 'red';
  areaColor1: string = 'gray';

}
```