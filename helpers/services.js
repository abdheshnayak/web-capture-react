import assert from 'assert';
import axios from 'axios';

const compilerServices = {};

compilerServices.getDoc = () => {
  return `<!DOCTYPE html>
  <html lang="en" dir="ltr">
  <head>
  <title>API | Progman Compiler</title>   <link rel="stylesheet"          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/default.min.css">    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/highlight.min.js"></script>
  <meta name=viewport content="width=device-width" scale=1.0>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv=content-type content="text/html; charset=utf-8">
  <link rel="stylesheet" href="https://cdn.progman.in/css/readme.css" />
  </head>
  <body class="stackedit">
  <div class="stackedit__html">
  <h3 style="text-align:center"><a href="https://ide.progman.in">Open IDE(ide.progman.in)</a></h3>
  <h2 id="progman-compilers-api-version-2">Progman Compilers API [Version 2]</h2>
  <p>Restfull api is supported (POST only) at <a href="https://rapidapi.com/abdheshnayak/api/code-compiler">https://rapidapi.com/abdheshnayak/api/code-compiler</a>. What needs to be supplied are these values (as http data name=val&name2=val2, content type header must not indicate json):</p>
  <ul>
  <li>LanguageChoice=Language number (see below)</li>
  <li>Program=Code to run</li>
  <li>Input=Input to be supplied to stdin of a process</li>
  </ul>
  <h4 id="returned-is-json-string-with-the-following-properties">Returned is json string with the following properties:</h4>
  <ul>
  <li>Result=Output of a program (in case of Sql Server - html)</li>
  <li>Warnings=null (No longer supported)</li>
  <li>Errors=Errors, if any, as one string</li>
  <li>Stats=null (No longer supported)</li>
  <li>Files=null(No longer supported)</li>
  </ul>
  <h4 id="language-numbers">Language numbers:</h4>
  <ul>
  <li>C# = 1</li>
  <li>F# = 3</li>
  <li>Java = 4</li>
  <li>Python = 5</li>
  <li>C (gcc) = 6</li>
  <li>C++ (gcc) = 7</li>
  <li>Php = 8</li>
  <li>Haskell = 11</li>
  <li>Ruby = 12</li>
  <li>Perl = 13</li>
  <li>Lua = 14</li>
  <li>Nasm = 15</li>
  <li>Javascript = 17</li>
  <li>Go = 20</li>
  <li>Scala = 21</li>
  <li>D = 30</li>
  <li>Swift = 37</li>
  <li>Bash = 38</li>
  <li>Erlang = 40</li>
  <li>Elixir = 41</li>
  <li>Ocaml = 42</li>
  <li>Kotlin = 43</li>
  <li>Rust = 46,</li>
  <li>Clojure = 47</li>
  <li>ATS = 48</li>
  <li>Cobol = 49</li>
  <li>Coffeescript = 50</li>
  <li>Crystal = 51</li>
  <li>Elm = 52</li>
  <li>Groovy = 53</li>
  <li>Idris = 54</li>
  <li>Julia = 55</li>
  <li>Mercury = 56</li>
  <li>Nim = 57</li>
  <li>Nix = 58</li>
  <li>Raku = 59</li>
  <li>TypeScript = 60</li>
  </ul>
  <h4 id="full-javascript-example">Full javascript example:</h4>
  <pre><code class="js">
  var axios = require("axios").default;

  var options = {
    method: 'POST',
    url: 'https://code-compiler.p.rapidapi.com/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-host': 'code-compiler.p.rapidapi.com',
      'x-rapidapi-key': 'your key'
    },
    data: {LanguageChoice: '5', Program: 'print("Hello World!, on python language")'}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  </code></pre>
  </div>
  <script>hljs.initHighlightingOnLoad();</script></body>
  </html>`;
};

compilerServices.compile = async (req) => {
  const baseUrl = 'https://glot.io/api/run/';

  const abc = [
    { url: 'https://glot.io/api/run/assembly', name: 'main.asm' },
    { url: 'https://glot.io/api/run/ats', name: 'main.ats' },
    { url: 'https://glot.io/api/run/bash', name: 'main.sh' },
    { url: 'https://glot.io/api/run/c', name: 'main.c' },
    { url: 'https://glot.io/api/run/clojure', name: 'main.clj' },
    { url: 'https://glot.io/api/run/cobol', name: 'main.cob' },
    { url: 'https://glot.io/api/run/coffeescript', name: 'main.cofee' },
    { url: 'https://glot.io/api/run/cpp', name: 'main.cpp' },
    { url: 'https://glot.io/api/run/crystal', name: 'main.cr' },
    { url: 'https://glot.io/api/run/csharp', name: 'main.cs' },
    { url: 'https://glot.io/api/run/d', name: 'main.d' },
    { url: 'https://glot.io/api/run/elixir', name: 'main.ex' },
    { url: 'https://glot.io/api/run/elm', name: 'main.elm' },
    { url: 'https://glot.io/api/run/erlang', name: 'main.erl' },
    { url: 'https://glot.io/api/run/fsharp', name: 'main.fs' },
    { url: 'https://glot.io/api/run/go', name: 'main.go' },
    { url: 'https://glot.io/api/run/groovy', name: 'main.groovy' },
    { url: 'https://glot.io/api/run/haskell', name: 'main.hs' },
    { url: 'https://glot.io/api/run/idris', name: 'main.idr' },
    { url: 'https://glot.io/api/run/java', name: 'Progman.java' },
    { url: 'https://glot.io/api/run/javascript', name: 'main.js' },
    { url: 'https://glot.io/api/run/julia', name: 'main.jl' },
    { url: 'https://glot.io/api/run/kotlin', name: 'main.kt' },
    { url: 'https://glot.io/api/run/lua', name: 'main.lua' },
    { url: 'https://glot.io/api/run/mercury', name: 'main.m' },
    { url: 'https://glot.io/api/run/nim', name: 'main.nim' },
    { url: 'https://glot.io/api/run/nix', name: 'main.nix' },
    { url: 'https://glot.io/api/run/ocaml', name: 'main.ml' },
    { url: 'https://glot.io/api/run/perl', name: 'main.pl' },
    { url: 'https://glot.io/api/run/php', name: 'main.php' },
    { url: 'https://glot.io/api/run/python', name: 'main.py' },
    { url: 'https://glot.io/api/run/raku', name: 'main.raku' },
    { url: 'https://glot.io/api/run/ruby', name: 'mian.rb' },
    { url: 'https://glot.io/api/run/rust', name: 'main.rs' },
    { url: 'https://glot.io/api/run/scala', name: 'progman.scala' },
    { url: 'https://glot.io/api/run/swift', name: 'main.swift' },
    { url: 'https://glot.io/api/run/typescript', name: 'main.ts' },
  ];

  const listLangChoice = {
    1: { url: 'https://glot.io/api/run/csharp', name: 'main.cs' },
    3: { url: 'https://glot.io/api/run/fsharp', name: 'main.fs' },
    4: { url: 'https://glot.io/api/run/java', name: 'Progman.java' },
    5: { url: 'https://glot.io/api/run/python', name: 'main.py' },
    6: { url: 'https://glot.io/api/run/c', name: 'main.c' },
    7: { url: 'https://glot.io/api/run/cpp', name: 'main.cpp' },
    8: { url: 'https://glot.io/api/run/php', name: 'main.php' },
    11: { url: 'https://glot.io/api/run/haskell', name: 'main.hs' },
    12: { url: 'https://glot.io/api/run/ruby', name: 'mian.rb' },
    13: { url: 'https://glot.io/api/run/perl', name: 'main.pl' },
    14: { url: 'https://glot.io/api/run/lua', name: 'main.lua' },
    15: { url: 'https://glot.io/api/run/assembly', name: 'main.asm' },
    17: { url: 'https://glot.io/api/run/javascript', name: 'main.js' },
    20: { url: 'https://glot.io/api/run/go', name: 'main.go' },
    21: { url: 'https://glot.io/api/run/scala', name: 'main.scala' },
    30: { url: 'https://glot.io/api/run/d', name: 'main.d' },
    37: { url: 'https://glot.io/api/run/swift', name: 'main.swift' },
    38: { url: 'https://glot.io/api/run/bash', name: 'main.sh' },
    40: { url: 'https://glot.io/api/run/erlang', name: 'main.erl' },
    41: { url: 'https://glot.io/api/run/elixir', name: 'main.ex' },
    42: { url: 'https://glot.io/api/run/ocaml', name: 'main.ml' },
    43: { url: 'https://glot.io/api/run/kotlin', name: 'main.kt' },
    46: { url: 'https://glot.io/api/run/rust', name: 'main.rs' },
    47: { url: 'https://glot.io/api/run/clojure', name: 'main.clj' },

    48: { url: 'https://glot.io/api/run/ats', name: 'main.ats' },
    49: { url: 'https://glot.io/api/run/cobol', name: 'main.cob' },
    50: { url: 'https://glot.io/api/run/coffeescript', name: 'main.cofee' },
    51: { url: 'https://glot.io/api/run/crystal', name: 'main.cr' },
    52: { url: 'https://glot.io/api/run/elm', name: 'main.elm' },
    53: { url: 'https://glot.io/api/run/groovy', name: 'main.groovy' },
    54: { url: 'https://glot.io/api/run/idris', name: 'main.idr' },
    55: { url: 'https://glot.io/api/run/julia', name: 'main.jl' },
    56: { url: 'https://glot.io/api/run/mercury', name: 'main.m' },
    57: { url: 'https://glot.io/api/run/nim', name: 'main.nim' },
    58: { url: 'https://glot.io/api/run/nix', name: 'main.nix' },
    59: { url: 'https://glot.io/api/run/raku', name: 'main.raku' },
    60: { url: 'https://glot.io/api/run/typescript', name: 'main.ts' },
  };

  const lc = Number(req.body.LanguageChoice);

  const payload = {
    url: `${listLangChoice[lc]?.url}/latest/`,
    headers: {
      Authorization: 'Token 9384cd50-4fcb-43d2-b9ae-031813c1ef7b',
      'Content-type': 'application/json; charset=utf-8',
    },
    data: {
      command: '',
      stdin: req.body.Input,
      files: [
        {
          name: listLangChoice[lc]?.name,
          content: req.body.Program,
        },
      ],
    },
    method: 'POST',
  };

  const res = await axios(payload);
  const result = {
    Errors: res.data.stderr ? res.data.stderr : null,
    Result: res.data.stdout ? res.data.stdout : null,
    Stats: 'No Status Available',
    Files: null,
  };
  return result;
};

export default compilerServices;
