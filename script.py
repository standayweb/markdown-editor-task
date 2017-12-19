import sys
import json

EVAL_CODE = 0
CALL_FUNCTION = 1

_stdout = sys.stdout

# Redirection of print statements. Buffer is 0 because we want to print to file inmediately
sys.stdout = open("log.txt", "w", 0)

def send(txt):
    _stdout.write(txt+ "\n")
    _stdout.flush()

while True:
    line = sys.stdin.readline().strip()

    message = json.loads(line)
    message_type = message["type"]

    if message_type == EVAL_CODE:
        exec(message["code"])
    elif message_type == CALL_FUNCTION:
        args = data.get("args", [])
        kwargs = data.get("kwargs", {})

        globals()[message["function"]](*args, **kwargs)
