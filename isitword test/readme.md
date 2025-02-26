# Word differentiation test
## Usage
run `isword.psyexp` and change the testing language by changing the loop condition file to either `wordorderen.xlsx` for English version or `wordorderth.xlsx` for Thai version

contains 40 different ID x 3 variants = 120 orders per file


## Repository explanation
- `isword.psyexp`: main `.psychopy` file
- `wordorder{en/th}.xlsx`: an excel file consisting of the order that the word will be shown
    - column 'lang' is used to identify language, bust since the file is already separated by language, this is not really important
    - column 'stimuli' tell what variance is being shown
        - 1 for correct variant, a meaningful word
        - 2 for scramble variant
        - 3 for pseudo/typo variant
    - column 'worddir' tells where the word image is located

- `ref/`: contains file that list the word used in the experiment
- `data/`: where all the experiment pukes out the result
- `word/`: contains word image, each are named `word[language][id][stimuli].png`
    