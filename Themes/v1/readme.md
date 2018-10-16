# Random - BetterNull [WIP]
Customizable default discord theme 
`Download it , Copy it to themes folder , Reload Discord (Ctrl +R), Enable it`
**Edit the vars in theme fille or copy one of the example to custom css and click save then update** 
# Gray
```css
 :root {
    --color1: #BDBDBD; /*friends row #99AAB5*/
    --color2: #9E9E9E; /*friends #36393f */
    --color3: #424242; /*titlebar #202225*/
    --color4: #616161; /*channels #2f3136*/
    --text-color: #212121;/* accent or something  #72767d*/
    --selection-color: #BDBDBD; /* header #dcddde*/
}
```
![Imgur](https://i.imgur.com/Mr10FGw.png) 
# with  background
```css
:root{
    --color1: rgba(0, 0, 0, 0.1);
    --color2: rgba(255, 255, 255, 0.01);
    --color3: rgba(255, 255, 255, 0.11);
    --color4: rgba(84, 84, 84, 0.15);
    --text-color: #feb89d;
    --selection-color: #3C4569;
    --blurVal: 5px;
    --withBg: url(https://i.imgur.com/CRLSXXx.jpg);
}
body::before {
  z-index:-1;
  content: " ";
  width: 100%;
  height: 100%;
  background-size: cover !important;
  position: absolute;
  background: var(--withBg) no-repeat center center fixed;
  filter: blur(var(--blurVal));
}
.contextMenu-HLZMGh, .itemSubMenu-1vN_Yn, .popout-3sVMXz, .popouts-3dRSmE, .popouts-3dRSmE >div, .autocomplete-1vrmpx, .autocomplete-i9yVHs, .da-autocomplete {
    --color2: var(--color3);
    --color3: rgba(213, 209, 209, 0.2);
    --color4: rgba(88, 91, 92, 0.92);
}
```
![Imgur](https://i.imgur.com/ULWOui2.jpg) 
