export const ETHTokyoQuery = `query ETHTokyo {
    Poaps(input: {filter: {eventId: {_eq: "125092"}}, blockchain: ALL, limit: 25}) {
      Poap {
        owner {
          identity
          primaryDomain {
            name
          }
          domains {
            name
          }
        }
      }
    }
  }`;
  export const ETHTokyoFinalistQuery = `query ETHTokyoFinalist {
    Poaps(input: {filter: {eventId: {_eq: "125096"}}, blockchain: ALL, limit: 25}) {
      Poap {
        owner {
          identity
          primaryDomain {
            name
          }
          domains {
            name
          }
        }
      }
    }
  }`;
  export const ETHLisbonQuery = `query ETHLisbon {
    Poaps(input: {filter: {eventId: {_eq: "127282"}}, blockchain: ALL, limit: 25}) {
      Poap {
        owner {
          identity
          primaryDomain {
            name
          }
          domains {
            name
          }
        }
      }
    }
  }`;
  export const ETHLisbonFinalistQuery = `query ETHLisbon {
    Poaps(input: {filter: {eventId: {_eq: "127280"}}, blockchain: ALL, limit: 25}) {
      Poap {
        owner {
          identity
          primaryDomain {
            name
          }
          domains {
            name
          }
        }
      }
    }
  }`;
  export const ScalingEthereumQuery = `query ScalingEthereum {
    Poaps(input: {filter: {eventId: {_eq: "117081"}}, blockchain: ALL, limit: 25}) {
      Poap {
        owner {
          identity
          primaryDomain {
            name
          }
          domains {
            name
          }
        }
      }
    }
  }`;
  export const ScalingEthereumFinalistQuery = `query ScalingEthereum {
    Poaps(input: {filter: {eventId: {_eq: "117089 "}}, blockchain: ALL, limit: 25}) {
      Poap {
        owner {
          identity
          primaryDomain {
            name
          }
          domains {
            name
          }
        }
      }
    }
  }`;