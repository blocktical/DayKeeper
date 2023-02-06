export const SECRET_DIARY_CONTRACT_ADDRESS = '0x50d814104c6255AD0532ADE4F54aAc54a96b67a0';
export const ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_heading",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_context",
          "type": "string"
        }
      ],
      "name": "writeDaySummary",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        }
      ],
      "name": "readDaySummary",
      "outputs": [
        {
          "internalType": "string",
          "name": "heading",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "context",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];