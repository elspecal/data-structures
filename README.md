# Data Structures
Basic data structures implemented in JavaScript as ES modules.  

Each module exposes a factory function that returns a new instance.
```
import { MySet } from './set.mjs';
```
or
```
const { MySet } = await import('./set.mjs');
```
then
```
const mySet = MySet();
```
For the moment the 'My' prefix is used whenever a built-in implementation already exists that would nameclash.
