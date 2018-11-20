* band-echart

useage
```html
 <div style="display: flex;">
    <band-echart [result]="result" style="flex:1;" [title]="title" [subTitle]="subTitle" [color]="color" [areaColor]="areaColor1"></band-echart>
    <band-echart [result]="result" style="flex:1" [title]="title2" [subTitle]="subTitle2" [color]="color2"></band-echart>
</div>
<div style="display: flex;">
    <band-echart [result]="result" style="flex:1;" [title]="title" [subTitle]="subTitle" [color]="color" [areaColor]="areaColor1"></band-echart>
    <band-echart [result]="result" style="flex:1" [title]="title2" [subTitle]="subTitle2" [color]="color2"></band-echart>
    <band-echart [result]="result" style="flex:1" [title]="title2" [subTitle]="subTitle2" [color]="color2"></band-echart>
</div>
```

```typescript

export class AppComponent {
  result = {
    "result": {
      "simple_size": [10, 24, 48, 96],
      "cmax": [86.11162282, 86.80422013, 88.82742124, 89.5800514],
      "ci90": [
        [10.12079116, 9.884907884],
        [8.315755291, 8.157550947],
        [7.104273246, 6.998062628],
        [4.945397473, 4.892707625]
      ]
    }
  };
  title = 'Sample size (AUC Radio)';
  subTitle: string = 'T/R%'
  color: string = 'red';
  areaColor1: string = 'gray';

  title2 = 'Sample size (AUC Radio)2';
  subTitle2: string = 'T/R%2'
  color2: string = 'blue';
  areaColor2: string = 'green'

}
```