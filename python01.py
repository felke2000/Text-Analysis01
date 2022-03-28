from typer import *


"""
def main(name: str):
    echo(f"Hello {name}")


if __name__ == "__main__":
    run(main)
"""

app = Typer()


@app.command()
def hello(name: str):
    echo(f"Hello {name}")


@app.command()
def goodbye(name: str, formal: bool = False):
    if formal:
        echo(f"Goodbye Ms. {name}. Have a good day.")
    else:
        echo(f"Bye {name}!")


if __name__ == "__main__":
    app()
