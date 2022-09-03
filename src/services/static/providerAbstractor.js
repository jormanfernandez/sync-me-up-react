import { fakeRequest } from "services/static/fakeRequest";

export const providerAbstractor = {
  kind: "static",
  getProviders,
  saveProviders
}

function getProviders () {
  const mockData = [
    {
      name: 'Gmail',
      logo: '/img/gmail.png',
      contacts: [
        {
          name: "Campos York",
          id: "5b2eee0a8fdd5b71c8148490",
          category: "Family",
        }, 
        {
          name: "Esperanza Boone",
          id: "5b2eee0a9cd29e820c10edad",
          category: "Family",
        }, 
        {
          name: "Holden Barry",
          id: "5b2eee0a582ba867abbd7ce7",
          category: "Work Friends",
        }, 
        {
          name: "Daniels Barlow",
          id: "5b2eee0afe5f471c63fa7acf",
          category: "Another label",
        }, 
        {
          name: "Leigh Burris",
          id: "5b2eee0af534aab9ece2f890",
          category: "Another label",
        }
      ],
    },
    {
      name: 'Mailchimp',
      logo: '/img/mailchipm.png',
      contacts: [
        {
          name: "Madeleine Lewis",
          id: "5b2eee0a1c7d1f9a917ddfe4",
          category: "Family",
        },
        {
          name: "Tamika Sexton",
          id: "5b2eee0a687b0c8c08798cad",
          category: "Work",
        },
        {
          name: "Ila Watson",
          id: "5b2eee0a8ca201ad091f7d61",
          category: "Work",
        },
        {
          name: "Lula Tyson",
          id: "5b2eee0a4b8671583018d66f",
          category: "Family",
        }
      ],
    }
  ];

  return fakeRequest(mockData, true);
}

function saveProviders(initialProvider, secondProvider) {
  const mockResponse = {
    status: 200,
    response: {
      data: {
        success: true,
      }
    },
    request: {
      data: {
        initialProvider,
        secondProvider
      }
    }
  }

  return fakeRequest(mockResponse, true);
}