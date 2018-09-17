#!/bin/bash

java -jar $CLOSURE_COMPILER_PATH ./es5/index.js --js_output_file ./es5/dist.js --language_out ECMASCRIPT5 --warning_level QUIET
echo "Done!"