require('dotenv').config();
const InferenceClient = require('@huggingface/inference').InferenceClient;

const HF_TOKEN = process.env.HF_TOKEN;
const client = new InferenceClient(HF_TOKEN);

async function generateResponse(input){
	const chatCompletion = await client.chatCompletion({
		provider: "fireworks-ai",
		model: "meta-llama/Llama-3.1-8B-Instruct",
			messages: [
					{
							role: "user",
							content: input,
					},
			],
	});
	return chatCompletion.choices[0].message.content;
}

module.exports = {
	generateResponse
};
