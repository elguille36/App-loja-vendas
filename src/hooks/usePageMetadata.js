import { useInsertionEffect } from 'react';

export function usePageMetadata({ title, description = '' }) {
  useInsertionEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
  }, [title, description]);
}