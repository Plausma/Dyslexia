# Word/Non-word recognition test
A small dyslexia case-based experiment made with psychopy

## Repository explanation
- `calculation\` - include files used for processing and calculating data after the experiment
- ~~`demo\` - include demo image and 2 word image file for a tutorial part~~ <span style="color:red">removed</span> 
- `image\` - include images that will be used in an actual experiment, <span style="color:orange">currently working</span>
-  `text\` - include images with text that will be used in an actual experiment, <span style="color:orange">currently working</span>
- `wordgen\` include files for generating images with text
-  `MainFlow.*` - psychopy-related file, used for running an experiment
-  `taskorder.xlsx` - excel file for listing a serie of image and word that will run on experiment, <span style="color:lime">done</span>
- `readme.md` - explain [this](https://github.com/Plausma/Dyslexia) document

## Naming system and specification
An image will be named as `img[id].png` e.g. `img002.png`

An image with text will be named by `[lang][id][word type].png` e.g. `en0024.png` is a pseudo english word that represent image `img002.png` 
- language that are used in this experiment are: english `en`, thai `th`, khmer `kh`, and greek `gr`
- ID is used from the image
- word types are categorized as follows:
  -   1 = correct word
  -   2 = greek word type (explanation can be found in Method part)
  -   3 = scramble word type
  -   4 = pseudo word type

# Introduction

The patient we used as a case study had a reading problem, in which the patient described the word/letter as "blended" while listening and talking, which is still intact.

According to McClelland and Rumelhart's model of letter-to-word recognition,  a patient may have an abnormality at the letter-to-word recognition neural node.

![Alt text](https://github.com/user-attachments/assets/cace0577-8f7e-4898-95d1-13ac69676b75)

_The aforementioned model, consisting of layers for letter feature, letter, and word recognition_

## Objective
The task objective is to see whether the patient can differentiate a real word from a misspelled word, measured in accuracy $\frac{\text{correct trials}}{\text{all trials}}$ and time reaction $t(s)$


## Method

```mermaid
flowchart LR
A[Picture <br/>1000 ms] --> B(Blank screen<br/>2000 ms)
B --> C["two word choices (correct/wrong)<br/>until respond"]
```

A list of words and images used are based on [BOSS (the Bank Of
Standardized Stimuli)](https://drive.google.com/folderview?id=0B3m1Sf0USgt8bXRjZFNDMUwzaWc&usp=sharing)

The two-word choices can be classified into 3 pairs: correct and incorrect variants.
- __correct - greek__, replace some letter(s) with a different but similar visual one, including but not limited to Greek letter (we call it __greek__ since it's more intuitive and many are familiar with it)
- __correct - scramble__, self-explanatory, randomize the letter position
- __correct - pseudo__, change all except the fist letter into a *pseudoword* that pronounceable but have no real meaning. The dataset can be found [here](https://doi.org/10.3389/fpsyg.2015.01395)

The word lengths will range from 3 to 7 letters, with 8 words for each length, totaling 40 words. Each word has 3 incorrect variations including Greek, scramble, and pseudoword (4 in total), 240 trials overall. 

| id | len | correct | greek | scramble | pseudo |
| ---- | ----- | ----- | ------| -------| ------ |
|1 | 3 | Dog |Ꟈog | goD | Dod |
|2| 3 | Cat | Cαt | taC | Cot |
|...|...|...|...|...|...|
|40 | 7 | Hamster | Hαmstεr | Tmshrea |Hamotor|

## Hypothesis 
The following table interprets each hypothesis's result. The arrow represents the accuracy if each hypothesis is true when the subject is tested with different word pairs.


| proposed condition\accuracy               | greek | scramble      | pseudo |
| ---------------------------------------------------- | -------------- | ------------ | ---------------------- |
| *example: Dog*                                            | Ꟈog    | goD  | Dod         |
| guessing the word from the word's shape | $\downarrow$   | $\uparrow$   | $\updownarrow$                    |
| use letter to recognize word                         | $\uparrow$     | $\downarrow$ | $\uparrow$             |
| can access lexicon (know what word means)            | $\uparrow$     | $\uparrow$   | $\updownarrow$                    |

## Post-experiment
The expected outcomes are formatted in two `.csv` files (accuracy ratio and reaction time)

`Accuracy.csv` _will look like this_
| id | len  | L-greek | R-greek | L-scramble | R-scramble | L-pseudo| R-pseudo |
| ---- |  ----- | ------| -------| ------ |  ------| -------| ------ |
|1 | 3 | 1 | 0 | 1 |  1 | 0 | 1 |
|2| 3 |  1 | 1 | 1 |  1 | 1 | 1 |
|...|...|...|...|...| ...|...|...|
|40 | 7 | 0 | 0 |0|  0 | 0 |0|

The mathematical method/plot that might be used are
- bar plot of accuracy (ratio) and reaction time (second) by word pairs (3) and word length (5)
- ANOVA test for mean difference by word pairs and word length
- Tukey's range test for each paired difference by word pair
- etc. still working lol
