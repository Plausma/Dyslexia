# Word understanding test
## Usage
run `wordimgflow.psyexp` and change the testing language by changing the loop condition file to either `imageorder_en.xlsx` for English version or `imageorder_th.xlsx` for Thai version

contains 60 different ID x 2 truestate x repeated (2) = 240 orders per file


## Repository explanation
- `wordimgflow.psyexp`: main `.psychopy` file
- `imageorder_{en/th}.xlsx`: an excel file consisting of the order that the word and image will be shown
    - column 'lang' is used to identify language, bust since the file is already separated by language, this is not really important
    - column 'imgid' tell the ID word and image used
    - column 'truestate' tell whether the image shown in that row represent the word or not, `0` for false, `1` for true
    - column 'worddir' and 'imgdir' tell where the word and image file are located

- `ref/`: contains file that list the word used in the experiment
- `image/`: contains true and false image, each are named `img[f if false/None if true][id:02].png` i.e. `imgf12.png` is a false image that does not represent word with ID = 12
- `data/`: where all the experiment pukes out the result
- `word/`: contains word image, each are named `word[language][id]1.png`
    