import Resolver  from '@forge/resolver';
import api from "@forge/api";
import { fetch } from '@forge/api';
import ForgeUI, { render, Fragment, Text, Macro, useProductContext, useConfig, MacroConfig, TextArea, Image, SectionMessage, isContentActionExtensionContext } from "@forge/ui";

const resolver = new Resolver();


resolver.define('getConfig', ({ payload, context }) => {
  const cfg = context.extension.config
  if(cfg && cfg.apiData) {
    return  JSON.parse(cfg.apiData);
  }
  return null;
});

export const handler = resolver.getDefinitions();

const Config = () => {
  return (
    <MacroConfig>
      {/* Form components */}
      <TextArea name="apiData" label="OpenAPI JSON" />
    </MacroConfig>
  );
};

export const config = render(<Config />);