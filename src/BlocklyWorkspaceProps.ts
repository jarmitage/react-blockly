import * as Blockly from "blockly/core";
import { WorkspaceSvg } from "blockly";
import { RefObject } from "react";
import React from "react";

export interface CommonBlocklyProps {
  initialXml?: string;
  initialJson?: object;
  toolboxConfiguration?: Blockly.utils.toolbox.ToolboxDefinition;
  workspaceConfiguration: Blockly.BlocklyOptions;
  onWorkspaceChange?: (workspace: WorkspaceSvg) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onImportXmlError?: (error: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onImportError?: (error: any) => void;
  onInject?: (newWorkspace: WorkspaceSvg) => void;
  onDispose?: (workspace: WorkspaceSvg) => void;
}
export interface BlocklyWorkspaceProps extends CommonBlocklyProps {
  className?: string;
  style?: React.CSSProperties;
  onXmlChange?: (xml: string) => void;
  onJsonChange?: (worksapceJson: object) => void;
  height?: string | number;
  width?: string | number;
}
export interface UseBlocklyProps extends CommonBlocklyProps {
  ref: RefObject<Element>;
}
