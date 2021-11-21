/**
  - {abc}-ac : SIMPLE
  - ${xx}: LITERAL
  - ${{abc}}: DOUBLE
*/

const items = [
  { type: 'DOUBLE', value: /\${{(.*?)}}/ },
  { type: 'LITERAL', value: /\${(.*?)}/ },
  { type: 'SIMPLE', value: /{(.*?)}/ }
];

export default (inString): string | undefined => {
  const target = items.find((item) => item.value.test(inString));
  return target?.type;
};
