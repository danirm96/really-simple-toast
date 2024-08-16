
# Really Simple Toast

It's a light and simple package to show toast in your web with the all frameworks of JS. Disappear in 3.5 seconds or clicking.




![Logo](https://tstdev.es/really-simple-toast.png)


## Installation

Install the toast with npm

```bash
  npm i really-simple-toast
```
## Usage/Examples

```javascript
import Toasted from 'really-simple-toast';

function App() {
    Toasted.fire('User logged correctly', 'success');
}
```

### Methods and properties

- Fire: 
    - First param <String>: Text to show in toast
    - Second param <String> 'success' | 'error' | 'warning': Three differents styles, green, yellow or red.
    - Third param <boolean>: By default is false, is for dark mode, if your are building a two mode web maybe you want to change the toast to dark or light. It's just change background to black and text to white.


## Contact

If you need to contact or need some specifications or suggestions write me! danirdev96@gmail.com (if you know, spanish better ;))