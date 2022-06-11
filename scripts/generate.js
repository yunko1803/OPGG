const fs = require('fs');

const createComponentTemplate = (Component) => `
import './${Component}.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ${Component}: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('${Component}', className)}>
    </div>
  );
};

export default ${Component};
`;

const createContainerTemplate = (Component) => `
import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ${Component}: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('${Component}', className)}>
    </div>
  );
};

export default ${Component};
`;

const createStyleTemplate = (Component) => `
@import "../styles/mixins";
@import "../styles/colors";

.${Component} {
}
`;

function generate() {
  const type = process.argv[2];
  const name = process.argv[3];

  if (!type || !name) {
    console.info('Usage: npm run gen [type] [name]');
    process.exit();
  }

  let filePath = `src/${type}s/${name}.tsx`;
  const isExist = fs.existsSync(filePath);
  if (isExist) throw new Error(`File already exists at ${filePath}`);

  switch (type) {
    case 'container':
    case 'component':
    case 'page':
      fs.writeFileSync(filePath, createComponentTemplate(name).trim());
      fs.writeFileSync(`src/${type}s/${name}.scss`, createStyleTemplate(name).trim());
      return;
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
}

generate();
