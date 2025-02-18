# Word/Non-word recognition test
A small dyslexia case-based experiment made with psychopy

The patient that we used as a case study has a  reading problem in which the patient described the word/letter as "blended together" while listening and talking are still intact.

According to McClelland and Rumelhart's model of letter-to-word recognition  a patient may have abnormality at letter-to-word recognition nerual node
![The aformentioned model, consisting of layer for letter feature, letter, and word recognition](https://www.researchgate.net/publication/366839255/figure/fig3/AS:11431281110800480@1672766579848/A-partial-sketch-of-the-Interactive-Activation-Model-based-on-McClelland-and-Rumelhart.jpg)

The task objective is to see whether the patient can differentiate a real word from a mispell word, measured in accuracy and decision duration

```mermaid
flowchart LR
A[Picture <br/>1000 ms] --> B(Blank screen<br/>2000 ms)
B --> C["two 3-letter Words (correct/wrong)<br/>until respond"]
```
