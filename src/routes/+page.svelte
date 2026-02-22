<script lang="ts">
  let morse_map: Record<string, string> = {
    A: "• -",
    B: "- • • •",
    C: "- • - •",
    D: "- • •",
    E: "•",
    F: "• • - •",
    G: "- - •",
    H: "• • • •",
    I: "• •",
    J: "• - - -",
    K: "- • -",
    L: "• - • •",
    M: "- -",
    N: "- •",
    O: "- - -",
    P: "• - - •",
    Q: "- - • -",
    R: "• - •",
    S: "• • •",
    T: "-",
    U: "• • -",
    V: "• • • -",
    W: "• - -",
    X: "- • • -",
    Y: "- • - -",
    Z: "- - • •",
    "1": "• - - - -",
    "2": "• • - - -",
    "3": "• • • - -",
    "4": "• • • • -",
    "5": "• • • • •",
    "6": "- • • • •",
    "7": "- - • • •",
    "8": "- - - • •",
    "9": "- - - - •",
    "0": "- - - - -",
    " ": "/",
  };

  let input_text = "";
  let output_text = "";

  function handle_submit(event: SubmitEvent) {
    event.preventDefault();
    convert_to_morse();
  }

  function convert_to_morse() {
    output_text = "";

    for (let c = 0; c < input_text.length; c++) {
      let char = input_text[c].toUpperCase();
      if (!Object.keys(morse_map).includes(char)) {
        output_text = "Invalid character: " + char;
        break;
      }
      output_text += morse_map[char];
    }
  }
</script>

<main class="p-16 flex flex-col gap-8">
  <!-- Input  -->
  <form action="" class="flex flex-col gap-2" onsubmit={handle_submit}>
    <label for="input" class="font-bold">Enter text (no punctuation):</label>
    <textarea
      name=""
      id="input"
      class="border border-gray-800 h-[5rem] p-2 rounded-lg w-full"
      placeholder="Enter something to get started..."
      bind:value={input_text}
    ></textarea>
    <button
      type="submit"
      class="bg-black text-white hover:text-black hover:bg-white hover:border-black border max-w-[10ch] rounded-lg"
      >Convert</button
    >
  </form>

  <!-- Output -->
  <div>
    <h3 class="font-bold">Output:</h3>
    <textarea
      name=""
      id="output"
      class="border border-gray-400 h-[5rem] p-2 rounded-lg w-full disabled"
      placeholder="Enter something to get started..."
      disabled
      bind:value={output_text}
    ></textarea>
  </div>
</main>
