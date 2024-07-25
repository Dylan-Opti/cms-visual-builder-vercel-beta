import { Scripts } from '@remkoj/optimizely-one-nextjs/server'
import { OptimizelyOneProvider, PageActivator } from '@remkoj/optimizely-one-nextjs/client'
import OptimizelyOneGadget from '@remkoj/optimizely-one-nextjs/optimizely-one-gadget'

export type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) 
{
    return <html>
        <head>
            <Scripts.Header />
        </head>
        <body>
            <OptimizelyOneProvider value={{ debug: true }}>
                <PageActivator />
                { children }
                <OptimizelyOneGadget />
            </OptimizelyOneProvider>
            <Scripts.Footer />
        </body>
    </html>
}
