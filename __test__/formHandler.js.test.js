
import { handleSubmit } from '../src/client/js/formHandler'

test('should return true', () => {
    expect(typeof handleSubmit).toBe('function');
});