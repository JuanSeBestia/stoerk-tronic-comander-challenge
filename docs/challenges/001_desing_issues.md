# Challenge 1 - Design issues

Please identify design issues in the following UI, could you also give us some suggestions for this UI

![imgs/ch_001.png](imgs/ch_001.png)

## Issues

### Bad contrast

![docs/challenges/imgs/issue_1.png](imgs/issue_1.png)

1. Both the text and the icons use a gray color, and they have a quite dark blue, which gives a lower contrast than recommended, I would suggest you use white instead of gray to give the best possible contrast and be much more legible.

2. Perhaps the previous point is due to the fact that they want to highlight the selected one. the marker to the left of the icon is fine, but they could use color inversion or use another color so they don't have to resort to using different shades of gray.

![docs/challenges/imgs/issue_2.png](imgs/issue_2.png)

3. Very similar to 1, the contrast between the background and the text is not the most adequate.

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

![docs/challenges/imgs/issue_6.png](imgs/issue_6.png)

9. Putting a label on the two temperatures can let user know which is the meaning of those values.

![docs/challenges/imgs/issue_7.png](imgs/issue_7.png)

10. Sometimes it is not enough to just put the icons in sidebar, sometimes it is better also to put texts that indicate the functionality, just like the navbar. read more in [Do Icons Need Labels?](https://uxdesign.cc/do-icons-need-labels-6cb4f4282c00)

Example:

![docs/challenges/imgs/issue_7_1.png](imgs/issue_7_1.png)
![docs/challenges/imgs/issue_7_2.png](imgs/issue_7_2.png)

Here is an example to be flexible with the two versions, using a button in the footer of the sidebar

![docs/challenges/imgs/issue_8.png](imgs/issue_8.png)

11. Usually the button has action's label below the icons, but I'm not sure if this is different in your country.

There some examples
![docs/challenges/imgs/issue_8_1.png](imgs/issue_8_1.png)

12. I am not sure about the icons used for the "compressor" and "eco", I am not very familiar with all the concepts and symbols of refrigeration, but at first look they are not very easy for me to guess.

![docs/challenges/imgs/issue_9.png](imgs/issue_9.png)

13. All action buttons look quite large, it seems that it refers to a touch screen, but the edit button does not seem to follow the same pattern.

![docs/challenges/imgs/issue_11.png](imgs/issue_11.png)

14. For some reason the text "logout" is not in German

### Layout

![docs/challenges/imgs/issue_10.png](imgs/issue_10.png)

15. I don't understand why there are two navigation panels, I think one is enough.

16. Some navigation buttons seem to point to the same point.

17. The navigation button that represents home should be first.

![docs/challenges/imgs/issue_12.png](imgs/issue_12.png)

18. I have two feelings, 1. this can be a list, 2. it shows the main data of a single controller.

    18.1. Each item in the list should have a visual delimiter, usually it can be wrapped in a card.

    18.2. We could take advantage of the empty space below, to organize things better.

![docs/challenges/imgs/issue_13.png](imgs/issue_13.png)

19. It is not very clear if the layout is in two columns (purple) or two rows (red).

![docs/challenges/imgs/issue_14.png](imgs/issue_14.png)

20. Many of the padding or margins have a bad composition among other elements, it is difficult to explain, so I have tried to put the paddings that should be similar but they are not with the same ones with the same colors

### UX (User eXperience)

**NOTE:** It is difficult to find issues by not being able to interact with the application, since we only have an image of the application

21. At this point of observation, I still do not understand the real intention of this screen, I think that this screen is to edit and display a controller to change the behavior of a refrigerator, but it really is not entirely clear to me.

    Is important to fix this feeling before focusing on topics with less impact.

22. According to the layout of the elements it does not seem that it was intended to be supported in mobile version, should we worry about it?

23. An UI is suggested to improve the user experience.

![docs/challenges/imgs/ux-suggestion.png](imgs/ux-suggestion.png)
The source file can be found [here](adobe-xd/challenge-2-ux.xd)