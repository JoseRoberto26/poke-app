import { fetchGenerations } from "../../../services/generationService"
import { shallow } from "enzyme";
import { Loading } from "../../../components/Loading";


beforeAll (() => { 
    global.fetch = jest.fn();
})

let wrapper; 
beforeEach(() => {
    wrapper = shallow(<Loading/>, {disableLifecycleMethods: true })
})

afterEach(() => {
    wrapper.unmount();
 });

describe('Home screen', () => { 

    test('Must show loading component before api call success', () => { 
        expect(wrapper.find("div.mask").exists()).toBeTruthy();
    })
    test('Check if received the generations objects from API', async () => {
        const fakeResponse = {'data': 'response'};
        const getGenerationsSpy = jest.spyOn(fetchGenerations).mockImplementationOnce(() => { 
            return Promise.resolve({
                json: () => Promise.resolve(fakeResponse)
            })
        })
        expect(await getGenerationsSpy()).toHaveReturned(fakeResponse)
    })
})