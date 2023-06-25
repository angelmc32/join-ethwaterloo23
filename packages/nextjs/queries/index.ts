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
  export const ScalingEthereumQuery = `query ScalingEthereum {
    Poaps(input: {filter: {eventId: {_eq: "117089"}}, blockchain: ALL, limit: 25}) {
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