# Japanese Learning Overview

Here we are attempting to create a proper logical tree of overviews, pseudocode, and resources. That way at each level of the tree we can have something similar to a checkmark where we can re-evaluate the code and see where it is. 

Its not that we cannot code. Its that we do not understand how to come up with the proper logic that is needed usually in a tree format so we can tell our programs how to communicate with each other. 


I noticed this when I was trying to see how I can use classes with Oliver. I realized I couldnt put my thoughts together logically as to how I can figure out these problems. So ultimately the secret is to use the pseudo code system to organize my thoughts into program that works correctly. 

The md files should connect together showing the parent of the parent md file. 

Hence it will be called a pseudoTree

- ParentFile.md => Logic in md file to child
  - CurrentFile.md !=> Logic in md file from parent


# Japanese Learning PseudoCode

This is a Root to the Japanese Learning mkdir but a child of the subjects of study. Just remember that, which means there should be node logic coming from Subjects of study.

- *JapaneseLearning*
  - dire-build
  - dire-data
  - dire-markdown
    - [pseudocode_A0:OliverPrompt] => [status:plan]
    - --> Oliver first informs that user is at Menu
    - --> Menu Options: Study, Review, Quiz, Information, AI
    - ---> if study => studyMenu()
    - ---> if Review => JapReviewMenu()
    - ---> if Quiz => JapQuizMenu()
    - ---> if Information => JapInformation()
    - ---> if AI_Mode => AI()
  - dire-scripts
    - --> [studyMenu()] => [status:plan]
    - --> [JapReview()] => [status:plan]
    - --> [JapQuiz()] => [status:plan]
    - --> [Information()] => [status:plan]
    - --> [AI()] => [status:plan]
  - dire-tests
    - *vocab use test* => [VocabUseTest.js]
  