from llmware.models import ModelCatalog
from llmware.prompts import Prompt
from model_init import initializeModel

def get_explanation(query: str) -> str:
    model_name = "phi-3-gguf"
    prompter = initializeModel(model_name)
    if prompter is None:
        return "Model initialization failed."
    prompt = query
    try:
        explanation = prompter.prompt_main(prompt, prompt_name="default_with_context", temperature=0.45)
        response = explanation["llm_response"].strip()
        return response if response else "Sorry, didn't understand what you were trying to ask."
    except Exception as e:
        return f"Error getting explanation: {e}"