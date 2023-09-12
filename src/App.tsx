import { Github, FileVideo, Upload, Sparkles } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="px-6 py-2 w-full h-max flex items-center justify-between border-b">
        <h1 className="text-2xl font-mono font-bold">Mand.ai</h1>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜 na NLW da Rocketseat
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <section className="w-full h-[50%]">
            <Textarea
              placeholder="Inclua seu prompt para a IA..."
              className="h-full min-h-full max-h-full resize-none leading-relaxed"
            />
          </section>

          <section className=" w-full h-[50%]">
            <Textarea
              placeholder="Resultado gerado pela IA."
              readOnly
              className="h-full min-h-full max-h-full resize-none"
            />
          </section>

          <p className="text-muted-foreground text-xs">
            Lembre-se: Você pode usar a variável{" "}
            <strong className="text-violet-400">{"{transcription}"}</strong> no
            seu prompt para adicionar o conteúdo da transcrição do vídeo
            selecionado
          </p>
        </div>

        <aside className="w-80 h-full flex flex-col gap-6">
          <form className="flex flex-col gap-6">
            <label
              htmlFor="video"
              className="flex flex-col items-center justify-center border w-full rounded-md p-2 
            aspect-video cursor-pointer border-dashed text-sm 
            text-muted-foreground hover:bg-primary/75 hover:text-white transition-all"
            >
              <FileVideo className="h-6 w-6 mb-2" />
              Carregar video
            </label>

            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="flex flex-col gap-2">
              <Label htmlFor="transcription_prompt">
                Prompt de Transcrição
              </Label>
              <Textarea
                id="transcription_prompt"
                className="h-24 leading-relaxed resize-none"
                placeholder="Inclua palavaras chaves mencionadas no video separadas por (,)"
              />
            </div>
            <Button type="submit" className="font-bold">
              Carregar Video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>
          <Separator />
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label>Modelo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Titulo</SelectItem>
                  <SelectItem value="description">Descrição</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-xs text-muted-foreground italic">
                Você poderá customizar esta opção em breve
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Modelo</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-xs text-muted-foreground italic">
                Você poderá customizar esta opção em breve
              </span>
            </div>

            <Separator />

            <div className="flex flex-col gap-2">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} defaultValue={[0.3]} />
              <span className="text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e
                com possiveis erros.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="font-bold">
              Executar
              <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
