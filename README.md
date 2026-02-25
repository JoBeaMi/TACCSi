# TACCSi — Instruções de Instalação

## Estrutura de ficheiros

```
TACCSi/
├── index.html
├── Code.gs              ← Google Apps Script
├── README.md
└── img/
    │
    │  ── Tarefa 2A (48 ficheiros) ──
    ├── 2A_Exemplo_1.png
    ├── 2A_Exemplo_2.png
    ├── 2A_Exemplo_3.png
    ├── 2A_1_1.png
    ├── 2A_1_2.png
    ├── 2A_1_3.png
    ├── ...
    ├── 2A_15_1.png
    ├── 2A_15_2.png
    ├── 2A_15_3.png
    │
    │  ── Tarefa 2B (31 ficheiros) ──
    ├── 2B_Relativas_Exemplo.png
    ├── 2B_Relativas_1.png
    ├── ...
    ├── 2B_Relativas_15.png
    ├── 2B_Interrogativas_16.png
    ├── ...
    └── 2B_Interrogativas_30.png
    │
    │  ── Tarefa 2C (3 ficheiros) ──
    ├── 2C_Grunf.png
    ├── 2C_greenhappysmile.png
    └── 2C_redsadsmile.png
```

**Total: 82 ficheiros de imagem**

---

## Passo 1 — Google Sheets

1. Vai a [sheets.google.com](https://sheets.google.com), cria uma folha nova
2. **Extensões > Apps Script** → apaga o código existente → cola o conteúdo de `Code.gs`
3. **Guardar** → **Implementar > Nova implementação**
   - Tipo: `Aplicação Web`
   - Executar como: `Eu`
   - Quem acede: `Qualquer pessoa`
4. Copia o **URL da aplicação Web**

## Passo 2 — Ligar à app

Abre `index.html`, encontra esta linha e cola o URL:
```javascript
const SHEETS_URL = 'https://script.google.com/macros/s/SEU_URL/exec';
```

## Passo 3 — GitHub Pages

1. Cria repositório no GitHub
2. Upload de todos os ficheiros mantendo a estrutura (pasta `img/` na raiz)
3. **Settings > Pages** → Source: `main` / `root` → Save
4. URL disponível em ~1 minuto

---

## Notas

- A frase aparece em **todos os itens** para o terapeuta ler em voz alta
- O botão 🔊 está preparado para áudio futuro (adicionar `audio/2A_1.mp3` etc.)
- A criança nunca recebe feedback de certo/errado
- Normas CSC válidas para **5;4–6;10 anos** com protocolo completo (2A+2B+2C)
