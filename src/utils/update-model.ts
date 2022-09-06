import { Detail } from '../types';

function updateModel(element: HTMLInputElement, data: Detail) {
  element.dispatchEvent(
    new CustomEvent('updateForm', {
      bubbles: true,
      detail: { ...data },
    }),
  );
}

export default updateModel;
