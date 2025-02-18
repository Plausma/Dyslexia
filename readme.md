# Word/Non-word recognition test
A small dyslexia case-based experiment made with psychopy

The patient that we used as a case study has a  reading problem in which the patient described the word/letter as "blended together" while listening and talking are still intact.

According to McClelland and Rumelhart's model of letter-to-word recognition  a patient may have abnormality at letter-to-word recognition nerual node

![Alt text](https://github.com/user-attachments/assets/cace0577-8f7e-4898-95d1-13ac69676b75)

_The aformentioned model, consisting of layer for letter feature, letter, and word recognition_

The task objective is to see whether the patient can differentiate a real word from a mispell word, measured in accuracy and decision duration

```mermaid
flowchart LR
A[Picture <br/>1000 ms] --> B(Blank screen<br/>2000 ms)
B --> C["two 3-letter Words (correct/wrong)<br/>until respond"]
```
