import React from "react";
import PropTypes from "prop-types";
import useBlocklyWorkspace from "./useBlocklyWorkspace";
import { BlocklyWorkspaceProps } from "./BlocklyWorkspaceProps";

const propTypes = {
  initialXml: PropTypes.string,
  initialJson: PropTypes.object,
  toolboxConfiguration: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  workspaceConfiguration: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onWorkspaceChange: PropTypes.func,
  onImportXmlError: PropTypes.func,
  onImportError: PropTypes.func,
  onXmlChange: PropTypes.func,
  onJsonChange: PropTypes.func,
  onInject: PropTypes.func,
  onDispose: PropTypes.func,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

function BlocklyWorkspace({
  initialXml,
  initialJson,
  toolboxConfiguration,
  workspaceConfiguration,
  className,
  style: explicitStyle,
  onWorkspaceChange,
  onXmlChange,
  onJsonChange,
  onImportXmlError,
  onImportError,
  onInject,
  onDispose,
  height,
  width,
}: BlocklyWorkspaceProps) {
  const editorDiv = React.useRef(null);
  const { xml, json } = useBlocklyWorkspace({
    ref: editorDiv,
    initialXml,
    initialJson,
    toolboxConfiguration,
    workspaceConfiguration,
    onWorkspaceChange,
    onImportXmlError,
    onImportError,
    onInject,
    onDispose,
  });
  const onXmlChangeRef = React.useRef(onXmlChange);
  React.useEffect(() => {
    onXmlChangeRef.current = onXmlChange;
  }, [onXmlChange]);
  const onJsonChangeRef = React.useRef(onJsonChange);
  React.useEffect(() => {
    onJsonChangeRef.current = onJsonChange;
  }, [onJsonChange]);
  React.useEffect(() => {
    if (onXmlChangeRef.current && xml) {
      onXmlChangeRef.current(xml);
    }
    if (onJsonChangeRef.current && json) {
      onJsonChangeRef.current(json);
    }
  }, [xml, json]);

  const divStyle: React.CSSProperties = explicitStyle ? { ...explicitStyle } : {};
  if (height !== undefined) {
    divStyle.height = typeof height === 'number' ? `${height}px` : height;
  }
  if (width !== undefined) {
    divStyle.width = typeof width === 'number' ? `${width}px` : width;
  }

  return <div className={className} style={divStyle} ref={editorDiv} />;
}

BlocklyWorkspace.propTypes = propTypes;

export default BlocklyWorkspace;
