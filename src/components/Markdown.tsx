import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb} from 'react-syntax-highlighter/dist/esm/styles/prism';
const _mapProps = (props: any) => ({
    ...props
});

function Markdown(props: any) {
    return (
        <>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                                style={cb}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
                {..._mapProps(props)}
            />
            {/* <ReactMarkdown {..._mapProps(props)} /> */}
        </>

    );

}

export default Markdown;