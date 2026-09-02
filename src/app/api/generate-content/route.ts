import OpenAI from "openai";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { prompt, apiKey } = body as {
    prompt?: Array<{ role: "system" | "user" | "assistant"; content: string; name?: string }>;
    apiKey?: string;
  };

  const resolvedApiKey = apiKey || process.env.OPENAI_API_KEY;

  if (!prompt || !Array.isArray(prompt) || (!resolvedApiKey && !apiKey)) {
    return new Response(
      JSON.stringify("Add a valid OpenAI API key to generate content."),
      { status: 400 },
    );
  }

  if (!resolvedApiKey) {
    return new Response(
      JSON.stringify("The OpenAI API key is not configured for this deployment."),
      { status: 500 },
    );
  }

  try {
    const openai = new OpenAI({ apiKey: resolvedApiKey });
    const chatCompletion = await openai.chat.completions.create({
      messages: prompt,
      model: "gpt-3.5-turbo",
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const generatedContent = chatCompletion.choices[0].message?.content;
    return new Response(JSON.stringify(generatedContent || "No content generated."));
  } catch (error: any) {
    const message = error?.error?.message || error?.message || "Unknown error";
    return new Response(JSON.stringify(message), { status: 500 });
  }
}
