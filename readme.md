# Word/Non-word recognition test
A small dyslexia case-based experiment made with psychopy

The patient that we used as a case study has a  reading problem in which the patient described the word/letter as "blended together" while listening and talking are still intact.

According to McClelland and Rumelhart's model of letter-to-word recognition  a patient may have abnormality at letter-to-word recognition nerual node

![Alt text](https://github.com/user-attachments/assets/cace0577-8f7e-4898-95d1-13ac69676b75)

_The aformentioned model, consisting of layer for letter feature, letter, and word recognition_

The task objective is to see whether the patient can differentiate a real word from a mispell word, measured in accuracy $n(correct)$ and time reaction $t(s)$

```mermaid
flowchart LR
A[Picture <br/>1000 ms] --> B(Blank screen<br/>2000 ms)
B --> C["two word choices (correct/wrong)<br/>until respond"]
```

A list of words and images used are based on [BOSS (the Bank Of
Standardized Stimuli)](https://drive.google.com/folderview?id=0B3m1Sf0USgt8bXRjZFNDMUwzaWc&usp=sharing)

The two word choices can be classified into 3 pairs
- __correct - greek__, replace some letter(s) with a different but similar by visual one, included but not limited to greek letter (we call it __greek__ since it's more intuitive and many are familiar with it)
- __correct - scramble__, self-explanatory, randomize the letter position
- __correct - pseudo__, change all except the fist letter into a *pseudoword* that pronounceable but have no real meaning. The dataset can be found [here](https://doi.org/10.3389/fpsyg.2015.01395)

The result can be interpreted in the following table by each hypothesis. The arrow represents how the accuracy would be if each hypothesis is true when the subject is tested with different word pairs.



| proposed condition\accuracy               | greek | scramble      | pseudo |
| ---------------------------------------------------- | -------------- | ------------ | ---------------------- |
| *example: Dog*                                            | Ꟈog    | goD  | Dod         |
| guessing the word from the word's shape | $\downarrow$   | $\uparrow$   | $\updownarrow$                    |
| use letter to recognize word                         | $\uparrow$     | $\downarrow$ | $\uparrow$             |
| can access lexicon (know what word means)            | $\uparrow$     | $\uparrow$   | $\updownarrow$                    |
