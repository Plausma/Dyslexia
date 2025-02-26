# Letter differentiation test
## Usage
run `letterpair.psyexp` and change the testing language by changing the loop condition file to either `letterorder_en.xlsx` for English version or `letterorder_th.xlsx` for Thai version

contains 8 different letter x 3 pairs x 2 order x repeated (2) = 96 orders per file


## Repository explanation
- `isword.psyexp`: main `.psychopy` file
- `letterorder_{en/th}.xlsx`: an excel file consisting of the order that the letter will be shown
    - column 'lang' is used to identify language, bust since the file is already separated by language, this is not really important
    - column 'langpair' tell what other letter language is from
        - for `letterorder_en.xlsx`, [1, 2, 3] is [thai, khmer, greek]
        - for `letterorder_th.xlsx`, [1, 2, 3] is [english, khmer, greek]
    - column 'pairid' tells the pair ID (each language has their own pair ID)
    - column 'firstdir' and 'seconddir' tells where the first and second letter image are located

- `ref/`: contains file that list the word used in the experiment
- `data/`: where all the experiment pukes out the result
- `letter/`: contains letter image, each are named `lett[language][table_id].png`
    - `table_id` are unique to each letter as it tells row and column from the `lett_forgen.xlsx`, please refer to `ref/` if you want to know which letter are being run
    