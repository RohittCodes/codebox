from llmware.models import ModelCatalog
from llmware.prompts import Prompt

def initializeModel(model_name: str):
    try:
        prompter = Prompt().load_model(model_name)
        return prompter
    except Exception as e:
        print(e)
        return None