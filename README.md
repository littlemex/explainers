# explainers

Interactive HTML explainers for technical topics — papers, datasets, and concepts you can read, run, and grasp intuitively.

Published via GitHub Pages: https://littlemex.github.io/explainers/

## Series

| Series | Topic | Entry |
|--------|-------|-------|
| ML basics | Transformer building blocks (Attention, FFN/MoE, normalization) and Flow Matching, each explained from scratch with live animations | [ml-basics-index.html](./ml-basics-index.html) |
| Attention lineage | MHA to GQA/MLA, sparsification (SWA/DSA), and linear/state-space models (Mamba), traced along a release-time family tree | [attention-series-index.html](./attention-series-index.html) |
| NKI Workshop | Writing high-performance kernels on AWS Trainium — hardware hierarchy, roofline, FlashAttention, tiling, low precision, collectives | [nki-workshop-index.html](./nki-workshop-index.html) |
| Coding | Algorithms and coding fundamentals — binary search, complexity, DP, graph search — explained then quizzed | [coding-index.html](./coding-index.html) |
| Distributed systems | CAP, consistency models, consensus (Raft/Paxos), replication — explained then quizzed | [distsys-index.html](./distsys-index.html) |
| MLIR | Dialects, progressive lowering, SSA, pattern rewriting — explained then quizzed | [mlir-index.html](./mlir-index.html) |
| Mathematical statistics | MLE, CLT, Bayesian inference, hypothesis testing — explained then quizzed | [mathstats-index.html](./mathstats-index.html) |
| Information theory | Entropy, KL divergence, mutual information, coding theorems — explained then quizzed | [infotheory-index.html](./infotheory-index.html) |

### ML basics series

1. [Softmax Attention](./softmax-attention-explainer.html) — how Q/K/V mix, why the cost is N², bound analysis, and why FlashAttention works
2. [FFN to MoE](./ffn-moe-explainer.html) — the FFN workhorse vs. sparsely-activated MoE, and the GEMM-inefficiency → block-sparse (MegaBlocks) story
3. [RMSNorm](./rmsnorm-explainer.html) — why dropping the mean keeps quality while simplifying the implementation; cost and fused-kernel effects vs. LayerNorm
4. [Flow Matching](./flow-matching-explainer.html) — watch noise flow into data, and see how averaging straight-line paths yields the correct velocity field

## How it works

Each explainer is a single self-contained HTML file (inline CSS/JS, no build step). Open any file directly in a browser, or browse them from `index.html`.

## Authoring rule: quiz-based explainer series

The Coding, Distributed systems, MLIR, Mathematical statistics, and Information theory series follow a fixed format. Every page in these series MUST:

1. **Explain first, graphically.** Open with an explanation section that builds intuition for *why* things are true, aimed at a beginner. Use inline SVG figures (not just prose) and typeset math with LaTeX via MathJax (`$...$` inline, `$$...$$` display). Prefer showing the mechanism visually over stating conclusions.
2. **Then quiz: 10 questions, 5 options each.** After the explanation, present exactly 10 multiple-choice questions, each with 5 options.
3. **Click an option → reveal detailed explanations for all five.** When the reader picks an option, every option expands with a detailed explanation: the correct one explains *why it is correct* (from definitions / invariants); each distractor explains *why it is wrong*, naming the common misconception it targets. A figure-based summary ("why this answer") follows, again using SVG + LaTeX.
4. **Be self-contained.** Single HTML file, inline CSS/JS, MathJax from CDN only. No emoji. Japanese prose. In JS string literals, escape LaTeX backslashes (`'$\\log_2 n$'`).

The reference implementation lives in `_template/QUIZ_TEMPLATE.html` (in the working tree used to author pages) — copy its CSS and the quiz-rendering JS engine verbatim and only fill in the `QUIZ` array and explanation content. This keeps the interaction identical across every series.

## Publishing

GitHub Pages serves the repository root of the `main` branch. Add a new `*.html` file, link it from `index.html` (and the relevant series index), and push.
