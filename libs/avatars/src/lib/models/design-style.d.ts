export type DesignStylePropertyOption = {
    id: string;
    label: string;
    value?: string;
};

export type DesignStyleProperty = {
    id: string;
    label: string;
    defaultValue?: string;
    type: 'select' | 'color' | 'file';
    options: DesignStylePropertyOption[];
};

export type DesignStyle = {
    id: string;
    name: string;
    url?: string;
    description?: string;
    properties: DesignStyleProperty[];
    license: {
        type: string;
        url?: string;
    }
};
