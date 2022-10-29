## Krok 1 - Przygotowanie jednego segmentu wyświetlacza 7 segementowego

Pojedyczńca cyfra

![Single Digit](doc/digit.jpg)

Zaczynamy od pojedyńczego elementu `div`
```
<div class="segment">
</div>
```
który można ustawić koło siebie w lini czyli  `display: inline-block`. Zdefiniujmy sobie klase css `segment` określającą pojedyńczy segment naszego wyświetlacza 7-segmentowego. Ustalmy sobie jego wielkość na `--s-width` i `--s-height` określone jako zmienne css które bedzie można sobie potem swobodnie zmieniać. Ponieważ inne elementy naszego wyświetlacza będziemy obliczac na podstawie zmiennych `--s-width` i `--s-heigth` ustawmy je jako liczby bez jednostek, ułatwi to obliczenia arytmetyczne na tych zmiennych. Ustawmy też sobie kolor tła na szary `#626262`. 

```
.segment {
  --s-width: 60;
  --s-height: 100;
  --s-color: #626262;
  position: relative;
  left: 0;
  top:0;
  display: inline-block;
  width: calc(var(--s-width)*1px);
  height: calc(var(--s-height)*1px);
  background-color: var(--s-color);
}
```

![Segment](doc/step01-01.jpg)




```
.segment {
  --s-width: 60;
  --s-height: 100;
  --s-color: #626262;
  --bar-thickness: 20;
  --bar-padding: 2;
  --bar-color-on: red; /*#f6fa10;*/
  --bar-color-off: #828282;
  position: relative;
  left: 0;
  top:0;
  display: inline-block;
  width: calc(var(--s-width)*1px);
  height: calc(var(--s-height)*1px);
  background-color: var(--s-color);
}
```

