from traitlets import Dict, HasTraits, List, Unicode
from ._frontend import module_name, module_version
from ipywidgets import DOMWidget

class NivoWidgetMixin(HasTraits):
    """
    Traitlets that are constant across all of nivo widgets
    """
    _model_module = Unicode(module_name).tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
        

class BarWidget(NivoWidgetMixin, DOMWidget):
    _model_name = Unicode('BarModel').tag(sync=True)
    _view_name = Unicode('BarView').tag(sync=True)
    
    data = List().tag(sync=True)
    style = Dict().tag(sync=True)

class LineWidget(NivoWidgetMixin, DOMWidget):
    """ Nivo Line Widget
    """
    _model_name = Unicode('LineModel').tag(sync=True)
    _view_name = Unicode('LineView').tag(sync=True)
    
    data = List().tag(sync=True)
    style = Dict().tag(sync=True)

class TreeMapWidget(NivoWidgetMixin, DOMWidget):
    """ Nivo TreeMap Widget
    """
    _model_name = Unicode('TreeMapModel').tag(sync=True)
    _view_name = Unicode('TreeMapView').tag(sync=True)
    
    data = List().tag(sync=True)
    style = Dict().tag(sync=True)