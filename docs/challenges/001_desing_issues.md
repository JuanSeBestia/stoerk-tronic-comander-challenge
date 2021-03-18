# Challenge 1

Please identify design issues in the following UI, could you also give us some suggestions for this UI

![imgs/ch_001.png](imgs/ch_001.png)

## Issues

### Bad contrast

![docs/challenges/imgs/issue_1.png](imgs/issue_1.png)

1. Both the text and the icons use a gray color, and they have a quite dark blue, which gives a lower contrast than recommended, I would suggest you use white instead of gray to give the best possible contrast and be much more legible.

2. Perhaps the previous point is due to the fact that they want to highlight the selected one. the marker to the left of the icon is fine, but they could use color inversion or use another color so they don't have to resort to using different shades of gray.

![docs/challenges/imgs/issue_2.png](imgs/issue_2.png)

3. Very similar in 1, the contrast between the background and the text is not the most adequate.

![docs/challenges/imgs/issue_3.png](imgs/issue_3.png)

4. The fan icon is lighter than the compressor, is this because it is disabled? otherwise it should have the same opacity (solid)

### Colors

5. I identify the followings colors:

* blue: ![0a2e40](https://via.placeholder.com/15/0a2e40/000000?text=+) `#0a2e40`
, ![2369b1](https://via.placeholder.com/15/2369b1/000000?text=+) `#2369b1`, ![296bb7](https://via.placeholder.com/15/296bb7/000000?text=+) `#296bb7`, ![154187](https://via.placeholder.com/15/154187/000000?text=+) `#154187`, ![204165](https://via.placeholder.com/15/204165/000000?text=+) `#204165`, ![3cbac5](https://via.placeholder.com/15/3cbac5/000000?text=+) `#3cbac5`
* green: ![#74d424](https://via.placeholder.com/15/74d424/000000?text=+) `#74d424`, ![#5dd80b](https://via.placeholder.com/15/5dd80b/000000?text=+) `#5dd80b`
* gray: ![3cbac5](https://via.placeholder.com/15/e0e0e2/000000?text=+) `#e0e0e2`, ![7b7c7d](https://via.placeholder.com/15/7b7c7d/000000?text=+) `#7b7c7d`, ![c8c8c8](https://via.placeholder.com/15/c8c8c8/000000?text=+) `#c8c8c8`, ![9b999a](https://via.placeholder.com/15/9b999a/000000?text=+) `#9b999a`
* white: ![fefefe](https://via.placeholder.com/15/fefefe/000000?text=+) `#fefefe`

**NOTE** All colors are presented in hexadecimal-rgb presentation.

I recommend that the fewest possible colors be used and the colors used represent an intention, which could represent hierarchy (such as title and subtitle) or condition (on, off, error).

![docs/challenges/imgs/issue_4.png](imgs/issue_4.png)

6. It is not very clear if the color represents a state such as: on and off, adequate and low temperature or enabled and disabled. respectively.

7. I recommend not using gray as the main background color as it has some issues with contrast as mentioned above. Also the screen may appear to be dirty or damaged.

![docs/challenges/imgs/issue_5.png](imgs/issue_5.png)

8. The intention is not very clear, is it by hierarchy or by state or by relationship?

      8.1. Do they have the same hierarchy, is it the same state or is it the temperature of F1?

      8.2. Do they have the same hierarchy, is it the same state or is it the temperature of compress and fan?

      8.3. Is it clarifying text like note, or is it disabled?

### Labeling