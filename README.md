
# Really Simple Toast

Light and simple package to display toast in your application suitable with all the current JS frameworks . By default it will dissapear after 3.5 seconds or by clicking on it




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
    - First param <String>: the text that your toast will show
    - Second param <String> 'success' | 'error' | 'warning': This param alows you yo choose between three differents styles, green, yellow or red.
    - Third param <boolean>: It turns dark mode on, (false by default). It will change your background and font color to adapt to your theme in two mode applications.


## Contact

For further specifications or suggestions you can contact me on danirdev96@gmail.com (I feel more confortable talking in spanish but we can sort it out ;) )